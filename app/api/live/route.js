// NewsApi call
import axios from "axios";

export async function GET (request) {
    try {
        // Calling the news API with a query related to security
        const response = await axios.get("https://newsapi.org/v2/everything", {
            params: {
                q: '"security" AND "Nigeria"',
                language: "en",
                sortBy:"publishedAt",
                pageSize:4,
                apiKey: process.env.NEWS_API_KEY,
                from: "2025-04-01",
            },
        });
        

        return new Response(JSON.stringify(response.data), {
            status:200,
            headers: {"Content-Type": "application/json"},
        });


    } catch (error) {
        console.error("Error fetching live data:", error);
        return new Response(JSON.stringify({
            error: "Error fetching live data"}), {
                status: 500,
                headers: {"Content-Type": "application/json"},
            });
        
    }
}