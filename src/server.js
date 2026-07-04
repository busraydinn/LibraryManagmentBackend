const express=require("express");
const cors=require("cors")
const app=express();
const PORT=3000;
const booksInformation=require("./data/Books.json");
app.use(express.json());
 app.use(cors())
 app.get("/books",(req,res)=>{
        res.send(booksInformation);
})
app.get("/bookDetails/:id",(req,res)=>{
    const id=Number(req.params.id);
    const books=booksInformation.find((c)=>c.id===id);
    if(!books) return res.status(400).json("Kitap bulunamadı");
    res.json(books);
});
app.listen(3000,()=>{
    console.log(`Server ${PORT}'tunda başlatıldı.`);
})
