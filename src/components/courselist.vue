<template>
<div>
  <h1> Course List </h1>
  <span>(</span>
  <span>Edit </span>
  <span> Delete</span>
  <span>)</span>
  <table border='1' width='70%' style='border-collapse: collapse;'>
    <tr>
      <th>Course Number</th>
      <th>Course Name</th>
    </tr>
  
  </table>

</div>
</template>

<script>
export default{
  props: {
  course: Object
  }
}



</script>
