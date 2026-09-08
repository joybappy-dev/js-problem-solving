function checkEmail(email) {
    return email.includes(".") && email.includes("@");
}

function checkPrice(price) {
    return price > 0 && typeof price === "number";
}

function applyDiscount(price, percentageOfDiscount, cuponCode) {
    if (cuponCode === "hello") {
        let discountAmont = (price * percentageOfDiscount) / 100;
        let priceAfterDiscount = price - discountAmont;
        return priceAfterDiscount;
    }
}

function prepareBill(finalPrice, user) {
    console.log(`Hi! Mr. ${user.name}\nYour Orderplaced Successfully.`);
    console.log(`customer: ${user.name}\nEmail: ${user.email}`);
    console.log(`Total Price: ${finalPrice}`);
    console.log(`Order placed at: ${new Date().toLocaleString()}`);
    console.log("Thank you for your order.");
}

function processOrder(user, price, cuponCode) {
    const isValidEmail = checkEmail(user.email);
    if (!isValidEmail) {
        console.log("Invalid user!");
        return;
    }

    const isValidPrice = checkPrice(price);
    if (!isValidPrice) {
        console.log("Invalid Price");
        return;
    }

    let finalPrice = price;
    if (cuponCode) {
        const priceAfterDiscount = applyDiscount(price, 10, "hello");
        finalPrice = priceAfterDiscount;
    }

    prepareBill(finalPrice, user);
}

const user1 = {
    name: "Joy",
    email: "joy@g.com",
};
const user2 = {
    name: "Rahim",
    email: "rahim@c.com",
};

processOrder(user1, 100, "hello");
processOrder(user2, 600, "hello");
processOrder({ name: "Unknown", email: "unknown@u.com" }, 300);
