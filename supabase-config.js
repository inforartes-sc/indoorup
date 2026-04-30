// Configuração Global do Supabase
window.SUPABASE_URL = "https://cvhitgxadfzymoavffuw.supabase.co";
window.SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2aGl0Z3hhZGZ6eW1vYXZmZnV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcxNjc3NDgsImV4cCI6MjA5Mjc0Mzc0OH0.HPY7ka-25u4B8183mb-lf3Or7NL4YooKRhmNvF6rtOY";

// Inicializa o cliente e expõe globalmente
window.supabase = window.supabase.createClient(window.SUPABASE_URL, window.SUPABASE_KEY);

window.TABLE_NAME = "indoorup_content";
window.DOCUMENT_ID = "main_data";
