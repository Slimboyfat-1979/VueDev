<template>
  <div class="form" v-on:submit.prevent="capture">
    <h1>Enter New Employee Details In the Form Below</h1>
    <form>
      <div class="form-control">
        <label>Name</label>
        <input type="text" name="name" v-model="newObject.name" />
      </div>
      <div class="form-control">
        <label for="">Age</label>
        <input type="number" name="age" id="" v-model="newObject.age" />
      </div>
      <div class="form-control">
        <label for="">Occupation</label>
        <input
          type="text"
          name="occupation"
          id=""
          v-model="newObject.occupation"
        />
      </div>
      <button>Submit</button>
    </form>
  </div>
</template>

<style scoped>
h1 {
    margin-bottom: 30px;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
  padding: 50px;
  margin: 0 auto;
  text-align: center;
}


.form-control {
   margin-bottom: 10px;
   display: flex;
   justify-content: space-between;
}
</style>

<script>
export default {
  data() {
    return {
      newObject: {
        name: "",
        age: "",
        occupation: "",
      },
      isEmpty: true,
    };
  },
  methods: {
    capture() {
        this.isEmpty = false;

      for (const key in this.newObject) {
        if(this.newObject[key] === "" || this.newObject[key] === null){
            this.isEmpty = true;
            break;
        }
      }

      if (!this.isEmpty) {
       
        fetch('/sent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.newObject)
        }).then(response => response.json()).then(data => console.log('data saved'))
      }else{
        console.log("Fields are empty still")
      }
    },
  },
};
</script>
