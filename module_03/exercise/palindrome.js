string = "kontrol"
split = string.split("")
reverse = split.reverse()
join = reverse.join("")

if (string == join) {
    console.log(`${string} is palindrome`)
} else {
    console.log(`${string} is not palindrome`)
}