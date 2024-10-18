
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'cdf744b846mshc378fcd049654bap1df721jsn6a9b39c3f213',
		'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com'
	}
};

const btn = document.querySelector(".btn")
const summary = document.querySelector("#sum")
summary.style.color = "white"



btn.addEventListener("click",(e)=>{
    e.preventDefault()

    const input = document.querySelector("#url").value
    const url = `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${input}&lang=en&engine=2`;


    summary.innerText = "Please Wait article is Summarizing!!!....."
     
    const urlvalid = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/

    if(!urlvalid.test(input)){

    summary.innerText = "Please Provide a Valid Url !!!"

}   else{
    fetch(url,options)
    .then(data=> data.json())
    
    .then((data)=>{
       summary.innerText = data?.summary   
    })
    .catch((error)=>{
        console.log(error);
    })   
    console.log("Hello");
}
})




