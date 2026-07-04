const express=require('express');
const router=express.Router();
const booksInformation=require("../data/Books.json");
router.get("/",(req,res)=>{
        res.send(booksInformation);
})
router.get("/:id",(req,res)=>{
    const id=Number(req.params.id);
    const books=booksInformation.find((c)=>c.id===id);
    if(!books) return res.status(400).json("Kitap bulunamadı");
    res.json(books);
});

 
module.exports=router;