const axios = require('axios');

module.exports = async (req, res) => {
  try {
    const todos = req.body.todos || [];
    console.log("Summarizing todos:", todos);

    let textToSummarize = todos.map((t, i) => `${i + 1}. ${t.text}`).join('\n');
    while (textToSummarize.length < 260) {
    textToSummarize += '\n' + textToSummarize;
}


    const response = await axios.post(
      'https://api.cohere.ai/v1/summarize',
      {
        text: `Summarize the following tasks in a motivational tone:\n${textToSummarize}`,
        length: "short",
        format: "paragraph",
        model: "command",
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.COHERE_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const summary = response.data.summary;
    console.log("Cohere Summary:", summary);

    await axios.post(process.env.SLACK_WEBHOOK_URL, {
      text: summary,
    });

    res.status(200).json({ message: "Summary sent to Slack!" });
  } catch (error) {
    console.error("Cohere error:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to summarize or send to Slack" });
  }
};
