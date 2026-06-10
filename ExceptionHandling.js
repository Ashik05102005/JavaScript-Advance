try {
    console.log("execution starts")
    let x = (1+3)
    throw new Error("THROW IT MANUALY");
    console.log("execution Continues")
} catch (error) {
  console.log("Caught:", error.message);
}
