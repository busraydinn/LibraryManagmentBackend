const express=require("express");
const cors=require("cors")
const app=express();
const PORT=3000;
const booksRoutes=require("./routes/BooksRoutes");
 app.use(express.json());

app.use("/books",booksRoutes);
 
app.listen(3000,()=>{
    console.log(`Server ${PORT}'tunda başlatıldı.`);
})
