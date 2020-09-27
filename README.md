# employeeDirectory

This Application uses React.js to disply a table of employee data. When the container component mounts, it makes an axios call to a Random User API to get the initial array of users and store it within the state variable. These results are kept within a control array, and then the filteredResults array is set to the results field. The table renders a list of employees's names, emails, ages, and picture with help of props, .map, and some React magic.

The buttons at the top allow the user to sort the results by name and age in ascending or descending order, as well as restore the original order. These functions use a .sort method with a spread operator for the results array in order to preserve the original data. They then call setState to set the state of the filteredResults array to the new resulting sorted array. The restore original button calls setState to set the filtered results back to the original array. Each time setState is called, React re-renders the table, allowing the user to quickly sort their employee list!

Check it out at https://paulsloderbeck.github.io/employeeDirectory/

![ScreenShot](https://github.com/paulsloderbeck/employeeDirectory/blob/master/ScreenShot.png)
