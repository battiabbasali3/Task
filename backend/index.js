const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/products', (req, res) => {
    res.json([
        { id: 1, name: "Laptop", price: 799, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8" },
        { id: 2, name: "Smartphone", price: 499, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" },
        { id: 3, name: "Wireless Headphones", price: 199, image: "https://images.unsplash.com/photo-1612858249937-1cc0852093dd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 4, name: "Smart Watch", price: 149, image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b" },
        { id: 5, name: "Bluetooth Speaker", price: 79, image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 6, name: "Gaming Mouse", price: 59, image: "https://images.unsplash.com/photo-1616296425622-4560a2ad83de?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 7, name: "Mechanical Keyboard", price: 99, image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d" },
        { id: 8, name: "DSLR Camera", price: 899, image: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 9, name: "Tablet", price: 399, image: "https://images.unsplash.com/photo-1556656793-08538906a9f8" },
        { id: 10, name: "Fitness Band", price: 49, image: "https://images.unsplash.com/photo-1690016424217-03f4d9427a6a?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 11, name: "Sunglasses", price: 35, image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c" },
        { id: 12, name: "Backpack", price: 59, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 13, name: "Shoes", price: 120, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 14, name: "T-Shirt", price: 25, image: "https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 15, name: "Hoodie", price: 45, image: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=1072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 16, name: "Power Bank", price: 39, image: "https://images.unsplash.com/photo-1644571669401-9ab344866592?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 17, name: "Wireless Charger", price: 29, image: "https://images.unsplash.com/photo-1591290619618-904f6dd935e3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 18, name: "Tripod", price: 55, image: "https://images.unsplash.com/photo-1576299090369-9067e4adca28?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 19, name: "Microphone", price: 69, image: "https://images.unsplash.com/photo-1476136236990-838240be4859?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 20, name: "LED Monitor", price: 199, image: "https://images.unsplash.com/photo-1582575650013-ff9a7c395d3b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
    ]);
});

app.listen(PORT, () => {
    console.log(`Backend running at http://localhost:${PORT}`);
});
