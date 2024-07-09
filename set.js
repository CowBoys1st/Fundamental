const fruits = ["Apple", "Banana", "Melon", "Apple"]

const newFruits = new Set(fruits)
newFruits.add("Lemon")
newFruits.add("Banana")

//newFruits.clear()
newFruits.delete("Apple")

console.log(newFruits.has("Apple"))

console.log(newFruits)

