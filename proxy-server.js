import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Ruta para obtener noticias
app.get('/news', async (req, res) => {
  try {
    const category = req.query.category || 'general';
    const apiKey = 'keyApiNews';
    
    let url;
    
    // Filtros personalizados para temas específicos
    if (category === 'argentina-politics') {
      url = `https://newsapi.org/v2/everything?q=política+argentina&language=es&sortBy=publishedAt&apiKey=${apiKey}`;
    } else if (category === 'independiente') {
      url = `https://newsapi.org/v2/everything?q="club+atlético+independiente"+OR+"independiente+avellaneda"&language=es&sortBy=publishedAt&apiKey=${apiKey}`;
    } else if (category === 'geopolitics') {
      url = `https://newsapi.org/v2/everything?q=geopolítica+OR+geopolitics&language=es&sortBy=publishedAt&apiKey=${apiKey}`;
    } else if (category === 'cryptocurrency') {
      url = `https://newsapi.org/v2/everything?q=criptomonedas+OR+bitcoin+OR+ethereum+OR+blockchain&language=es&sortBy=publishedAt&apiKey=${apiKey}`;
    } else if (category === 'cybersecurity') {
      url = `https://newsapi.org/v2/everything?q=ciberseguridad+OR+cybersecurity+OR+hacking+OR+seguridad+informática&language=es&sortBy=publishedAt&apiKey=${apiKey}`;
    } else {
      // Categorías generales de NewsAPI
      url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
    }
    
    const response = await fetch(url);
    const data = await response.json();
    
    res.json(data);
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);

});
