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
                    <b-container fluid>
                        
                        <b-row class="my-1">
                            <b-col sm="3"><label style="font-weight: bold ">Title</label></b-col>
                            <b-col sm="9"><label>: {{item.moderator}}</label></b-col>
                        </b-row>

                        <b-row class="my-1">
                            <b-col sm="3"><label style="font-weight: bold ">Content</label></b-col>
                            <b-col sm="9"><label>: {{item.moderator}}</label></b-col>
                        </b-row>

                        <b-row class="my-1">
                            <b-col sm="3"><label style="font-weight: bold ">Tipe</label></b-col>
                            <b-col sm="9"><label>: {{item.moderator}}</label></b-col>
                        </b-row>

                        <b-row class="my-1">
                            <b-col sm="3"><label style="font-weight: bold ">Status</label></b-col>
                            <b-col sm="9"><label>: {{item.status}}</label></b-col>
                        </b-row>

                        <b-row class="my-1">
                            <b-col sm="3"><label style="font-weight: bold ">Komunitas</label></b-col>
                            <b-col sm="9"><label>: {{item.name}}</label></b-col>
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
    name: "posting-detail",
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
          this.$router.push({name: "posting_edit"})
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
