import React, { useState,useEffect } from "react";
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";

export default function CreateForm() {

  let {id} = useParams()

  const [form, setForm] = useState({
    image: "",
    Title: "",
    Content: "",
    Author: "",
    Details: "",
  });

const navigate = useNavigate();

  const onSubmit = ((property,value)=>{
    setForm({
      ...form,
      [property]:value
    })
  })

  useEffect(()=>{

    (async ()=>{
       let res=await axios.get("http://localhost:3000/api/v1/readBlogId/"+id);
       setForm(res.data['data'][0]);
    })()

},[])

  const add = async()=>{
    let url = "http://localhost:3000/api/v1/CreateBlog"
    if(id){
      url = "http://localhost:3000/api/v1/blogUpdate/"+id
    }
    const res = await axios.post(url,form)
    alert('Blog Done')
    navigate('/')
  }

  return (
    <div className="container w-75 g-4 p-3 mt-5">
      <div className="row row-md-2 g-5">

      <h1>Fill your details:</h1>
      
        <div className="col-md-6">
          <label>Image</label>
          <input placeholder="Paste Image Link" value={form.image} onChange={(e)=>{onSubmit("image",e.target.value)}} type="text" className="form-control" />
        </div>

        <div className="col-md-6">
          <label>Author</label>
          <input value={form.Author} onChange={(e)=>{onSubmit("Author",e.target.value)}} type="text" className="form-control" />
        </div>

        <div className="col-md-6">
          <label>Content</label>
          <input value={form.Content} onChange={(e)=>{onSubmit("Content",e.target.value)}} type="text" className="form-control" />
        </div>

        <div className="col-md-6">
          <label>Title</label>
          <input value={form.Title} onChange={(e)=>{onSubmit("Title",e.target.value)}} type="text" className="form-control" />
        </div>

        <div className="col-md-4 form-outline">
        <label>
            Blog
          </label>
          <textarea value={form.Details} onChange={(e)=>{onSubmit("Details",e.target.value)}} className="form-control" id="textAreaExample1" rows="4" ></textarea>
        </div>

        <div>
        <button onClick={add} type="button" className="w-25 mx-auto btn btn-outline-primary">Create</button>
        </div>
        
      </div>
    </div>
  );
}
