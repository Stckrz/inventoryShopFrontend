export async function getStoreItemsByCategory(category: string){
	try{
		const response = await fetch(`http://localhost:8080/shopItems.php?category=${category}`)
		const data = await response.json();
		if(response.status === 200){
			return data;
		}else{
			return({message: "error retrieving data"})
		}
	}
	catch (error){
		console.log(error)
	}
}
