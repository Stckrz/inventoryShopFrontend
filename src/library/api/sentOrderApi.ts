import { SentOrder, OrderedItem } from "../../models/orderModel";

export async function postOrder(totalPurchaseAmount: number) {
	const currentDate = new Date();
	const sentOrderObject = {
		totalOrderAmount: totalPurchaseAmount,
		orderDate: currentDate.toISOString().split('T')[0]
	}
	const formdata = new FormData();

	for (const key in sentOrderObject) {
		formdata.append(key, sentOrderObject[key as keyof SentOrder].toString());
	}

	try {
		const response = await fetch('http://localhost:8080/receivedOrders/index.php', {
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
		formdata.append(key, orderedItemObject[key as keyof OrderedItem].toString());
	}

	try {
		const response = await fetch('http://localhost:8080/orderedItems/index.php', {
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
