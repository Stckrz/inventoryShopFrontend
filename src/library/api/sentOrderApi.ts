export async function postOrder(totalPurchaseAmount: number) {
	const currentDate = new Date();
	const sentOrderObject = {
		totalOrderAmount: totalPurchaseAmount,
		orderDate: currentDate.toISOString().split('T')[0]
	}
	const formdata = new FormData();

	for (const key in sentOrderObject) {
		if (sentOrderObject.hasOwnProperty(key)) {
			formdata.append(key, (sentOrderObject as Record<string, any>)[key].toString());
		}
	}

	try {
		const response = await fetch('http://slimyan.us/receivedOrders/', {
			method: "POST",
			body: formdata
		})
		const data = await response.json()
		if (response.status === 200) {
			return (data)
		} else {
			console.log("error posting Order")
		}
	}
	catch (error) {
		console.log({ "error": error });
	}
}

export async function postOrderedItem(shopItemId: number, receivedOrderId: number, shopItemQuantity: number) {
	const orderedItemObject = {
		shopItemId: shopItemId,
		receivedOrderId: receivedOrderId,
		orderedQuantity: shopItemQuantity
	}
	const formdata = new FormData();
	for (const key in orderedItemObject) {
		if (orderedItemObject.hasOwnProperty(key)) {
			formdata.append(key, (orderedItemObject as Record<string, any>)[key].toString());
		}
	}

	try {
		const response = await fetch('http://slimyan.us/orderedItems/', {
			method: "POST",
			body: formdata
		})
		const data = await response.json()
		if (response.status === 200) {
			return (data)
		} else {
			console.log("error posting orderedItem")
		}
	}
	catch (error) {
		console.log({ "error": error });
	}
}
