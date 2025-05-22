const axios = require('axios');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseApiKey = process.env.SUPABASE_API_KEY;
const headers = {
  apiKey: supabaseApiKey,
  Authorization: `Bearer ${supabaseApiKey}`,
};

exports.getTodos = async (req, res) => {
  try {
    const { data } = await axios.get(`${supabaseUrl}/rest/v1/todos?select=*`, { headers });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch todos' });
  }
};

exports.addTodo = async (req, res) => {
  try {
    const { text } = req.body;
    const { data } = await axios.post(
      `${supabaseUrl}/rest/v1/todos`,
      { text },
      { headers }
    );
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add todo' });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await axios.delete(`${supabaseUrl}/rest/v1/todos?id=eq.${id}`, { headers });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete todo' });
  }
};
