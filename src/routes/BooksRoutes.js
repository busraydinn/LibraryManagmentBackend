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

router.post(("/add"),(req,res)=>{
const {
    title,
    author,
    published_year,
    genres,
    is_available,
    stock,
    price,
    dimensions }=req.body;

const newBook={
    id:Date.now(),
    title,
    author,
    published_year,
    genres,
    is_available,
    stock,
    price,
    dimensions
    };

res.json({
    message:"Kitap Eklendi",
    book:newBook
});
});

router.put(("/:id"),(req,res)=>{
    const bookId=req.params.id;
    const updatedData=req.body;
    res.json({
        message:`Kitap ${bookId} tamamen güncellendi.`,
        data:updatedData
    });
});
router.patch("/:id", (req,res)=>{
    const bookId=req.params.id;
    const partialData=req.body;
    res.json({
        message:`Kitap ${bookId} kısmi olarak güncellendi.`,
        updatedFields:partialData
    });
});
router.delete("/:id",(req,res)=>{
            res.json({message:`Deleted User : ${req.params.id} `});
})
module.exports=router;