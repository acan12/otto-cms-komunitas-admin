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
                            <b-col sm="4"><label style="font-weight: bold ">Komunitas ID</label></b-col>
                            <b-col sm="8"><label class="ml-2">{{item.member_id}}</label></b-col>
                        </b-row>
                        
                        <b-row class="my-1 mt-3">
                            <b-col sm="4"><label style="font-weight: bold ">Nama</label></b-col>
                            <b-col sm="8"><b-input placeholder="Alternative input" :value="item.name" class="form-control-alternative border border-light"/></b-col>
                        </b-row>

                        <b-row class="my-1 mt-3">
                            <b-col sm="4"><label style="font-weight: bold ">Moderator</label></b-col>
                            <b-col sm="8"><b-input placeholder="Alternative input" :value="item.moderator" class="form-control-alternative border border-light"/></b-col>
                        </b-row>

                        <b-row class="my-1 mt-3">
                            <b-col sm="4"><label style="font-weight: bold ">Jumlah Anggota </label></b-col>
                            <b-col sm="8"><label class="ml-2">{{item.member_count}} Orang</label></b-col>
                        </b-row>

                    
                        <b-row class="my-1 mt-3">
                            <b-col sm="4"><label style="font-weight: bold ">Status</label></b-col>
                            <b-col sm="8">
                              <!-- <b-input placeholder="Alternative input" :value="item.status" class="form-control-alternative border border-light"/> -->
                              <b-dropdown id="dropdown-1" text="Public" variant="default" >
                                <b-dropdown-item>Pending</b-dropdown-item>
                                <b-dropdown-item>Approved</b-dropdown-item>
                                <b-dropdown-item>Public</b-dropdown-item>
                              </b-dropdown>
                            </b-col>
                        </b-row>

                        <b-row class="my-1 mt-3">
                            <b-col sm="4"><label style="font-weight: bold ">Image</label></b-col>
                            <b-col sm="8">
                                
                                <b-form-file accept="image/jpeg, image/png, image/gif"></b-form-file>
                                <b-img class="mt-2" src="https://picsum.photos/300/150/?image=41" fluid alt="Fluid image"></b-img>
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
              member_id: 12446646466,
              username: "asoygeboy",
              status: "Pending",
              email: "dodol@mail.com",
              phone: "08799799799",
              member_count: 15
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
