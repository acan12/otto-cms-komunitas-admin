<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success" />
    <b-container fluid class="mt--9">
      <b-row>
        <b-col>
          <b-card
            title="User Detail"
            img-alt="Image"
            tag="article"
            style="max-width: 100rem;"
            class="mb-2">

                <b-avatar href="javascript:;" class="avatar avatar-lg rounded-circle" src="https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg"></b-avatar>

                
				        <template>
                  <br/>
                    <b-container fluid>
                        <b-row class="my-1">
                            <b-col sm="3"><label style="font-weight: bold ">Member ID</label></b-col>
                            <b-col sm="9"><label>: {{item.member_id}}</label></b-col>
                        </b-row>
                        <b-row class="my-1">
                            <b-col sm="3"><label style="font-weight: bold ">Username</label></b-col>
                            <b-col sm="9"><label>: {{item.username}}</label></b-col>
                        </b-row>

                        <b-row class="my-1">
                            <b-col sm="3"><label style="font-weight: bold ">Status</label></b-col>
                            <b-col sm="9"><label>: {{item.status}}</label></b-col>
                        </b-row>

                        <b-row class="my-1">
                            <b-col sm="3"><label style="font-weight: bold ">Email</label></b-col>
                            <b-col sm="9"><label>: {{item.email}}</label></b-col>
                        </b-row>

                        <b-row class="my-1">
                            <b-col sm="3"><label style="font-weight: bold ">Phone</label></b-col>
                            <b-col sm="9"><label>: {{item.phone}}</label></b-col>
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
                </template>

                <br/>
				        <b-button ml-22 style="float: right" href="javascript:;" variant="primary" @click="editAction(item.phone)">Edit</b-button>

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
              member_id: 12446646466,
              username: "asoygeboy",
              status: "Pending",
              email: "dodol@mail.com",
              phone: "08799799799"
          }
      }
    },
    methods: {
      editAction: function(phone){
          this.$router.push({name : "user_management_edit" })
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
