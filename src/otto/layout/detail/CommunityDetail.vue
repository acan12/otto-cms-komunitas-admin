<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success" />
    <b-container fluid class="mt--9">
      <b-row>
        <b-col>
          <b-card
            title="Community Detail"
            img-alt="Image"
            tag="article"
            style="max-width: 100rem;"
            class="mb-2">

                <b-avatar href="javascript:;" class="avatar avatar-lg rounded-circle" src="https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg"></b-avatar>

                
				        <template>
                  <br/>
                    <b-container fluid>
                        <b-row class="my-1">
                            <b-col sm="3"><label style="font-weight: bold ">Name</label></b-col>
                            <b-col sm="9"><label>: {{item.name}}</label></b-col>
                        </b-row>
                        <b-row class="my-1">
                            <b-col sm="3"><label style="font-weight: bold ">Moderator</label></b-col>
                            <b-col sm="9"><label>: {{item.moderator}}</label></b-col>
                        </b-row>

                        <b-row class="my-1">
                            <b-col sm="3"><label style="font-weight: bold ">Jumlah Anggota</label></b-col>
                            <b-col sm="9"><label>: {{item.num_of_member}}</label></b-col>
                        </b-row>

                        <b-row class="my-1">
                            <b-col sm="3"><label style="font-weight: bold ">Status</label></b-col>
                            <b-col sm="9"><label>: {{item.status}}</label></b-col>
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
				        <b-button ml-22 style="float: right" href="javascript:;" variant="primary" @click="editAction(item.id)">Edit</b-button>

          </b-card>
        </b-col>
      </b-row>
      
    </b-container>
  </div>
</template>
<script>
  
  export default {
    name: "community-detail",
    data() {
      return {
        item: 
          {
              id: 12344,
              name: "Udin",
              moderator: "Bohay",
              num_of_member: "Pending",
              status: "Approved"
            
          }
      }
    },
    methods: {
      editAction: function(phone){
          alert("Edit phone "+phone)
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
