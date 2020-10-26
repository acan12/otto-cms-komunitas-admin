<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success" />
    <b-container fluid class="mt--9">
      <b-row>
        <b-col>
          <b-card
            img-alt="Image"
            tag="article"
            style="max-width: 100rem;"
            class="mb-2">

				        <template>
                  <br/>
                  <b-form>
                    <b-container fluid>
                        <b-row class="my-1 mt-3">
                            <b-col sm="3"><label style="font-weight: bold ">Nama</label></b-col>
                            <b-col sm="7"><b-input placeholder="Title Komunitas" :value="item.title" class="form-control-alternative border border-light"/></b-col>
                        </b-row>
                        <b-row class="my-1 mt-3">
                            <b-col sm="3"><label style="font-weight: bold ">Deskripsi</label></b-col>
                            <b-col sm="9">
                              <b-form-textarea
                                id="textarea"
                                placeholder="Enter something..."
                                rows="3"
                                max-rows="6"
                              ></b-form-textarea>

                            </b-col>
                        </b-row>

                  

                        <!-- <b-row>
                            <b-col sm="3"> File </b-col>
                            <b-col sm="9">
                                <b-form-file
                                    v-model="file1"
                                    :state="Boolean(file1)"
                                    placeholder="Choose a file or drop it here..."
                                    drop-placeholder="Drop file here..."
                                    />
                            </b-col>
                        </b-row> -->
                    </b-container>
                  </b-form>
                </template>

                <br/>
				        <b-button ml-22 style="float: right" href="javascript:;" variant="primary" @click="submitAction(item.phone)">Submit</b-button>

          </b-card>
        </b-col>
      </b-row>
      
    </b-container>
  </div>
</template>
<script>
  
  export default {
    name: "user-detail",
    data() {
      return {
        item: 
          {
              title: "Penangkaran Penyu Lokal",
              username: "asoygeboy",
              status: "Pending",
              email: "dodol@mail.com",
              phone: "08799799799"
          }
      }
    },
    methods: {
      submitAction: function(phone){
          alert("Submit phone "+phone)
      },
      filesChange: function(e){
        console.log(e)
      }
    }
  };
</script>
<style>
.el-table.table-dark{
  background-color: #172b4d;
  color: #f8f9fe;
}

.el-table.table-dark th,
.el-table.table-dark tr{
  background-color: #172b4d;
}

.el-table.table-dark td,
.el-table.table-dark th.is-leaf{
  border-bottom: none;
}
</style>
