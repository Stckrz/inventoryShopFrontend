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

export async function getSaleItemCategories(){
	try{
		const response = await fetch('http://localhost:8080/shopItems.php?categoryList');
		const data = await response.json();
		const categoryArray = []
		if(response.status === 200){
			for(let i = 0; i < data.length; i++){
				categoryArray.push(data[i].shopItemCategory)
			}
			return categoryArray
		} else {
			return ({"message": "internal database error"})
		}
	}
	catch (error){
		console.log({"error": error})
	}
}
