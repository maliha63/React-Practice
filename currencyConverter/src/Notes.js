//Keys:
  //1.Keys allow React to keep track of elements. This way, if an item is updated or removed, only that item will be re-rendered instead of the entire list.
  //2. Keys must be unique among siblings, but they don't have to be unique across the entire application.
  //3.Generally, the key should be a unique ID assigned to each item. As a last option/resort, you can use the array index as a key.
  //note: Always use key while looping and mapping over an array in React to display a component


//if you want to add performance in loop for repeating elements then use "Key" keyword in loops.if you don't use it then the performance will degrade.in simple words, you have to use "key" keyword in loops in React.
  

 //useId - A hook which is used to generate unique IDs that can be passed to accessibility attributes.
  //Don't call useId to generate keys in a list.Keys should be generated from your data.