<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success" />
    <b-container fluid class="mt--9">
      <b-row>
        <b-col>
          <b-card
            title="Produk Detail"
            img-alt="Image"
            tag="article"
            style="max-width: 100rem;"
            class="mb-2">

                <b-avatar href="javascript:;" class="avatar avatar-lg rounded-circle" src="https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg"></b-avatar>

                
				        <template>
                  <br/>
                    <b-container fluid>
                        <b-row class="my-1">
                            <b-col sm="3"><label style="font-weight: bold ">Product ID</label></b-col>
                            <b-col sm="9"><label>{{item.id}}</label></b-col>
                        </b-row>
                        <b-row class="my-1">
                            <b-col sm="3"><label style="font-weight: bold ">Nama</label></b-col>
                            <b-col sm="9"><label>{{item.name}}</label></b-col>
                        </b-row>

                        <b-row class="my-1">
                            <b-col sm="3"><label style="font-weight: bold ">Deskripsi</label></b-col>
                            <b-col sm="9"><label>{{item.desc}}</label></b-col>
                        </b-row>

                        <b-row class="my-1">
                            <b-col sm="3"><label style="font-weight: bold ">Kategori</label></b-col>
                            <b-col sm="9"><label>{{item.category}}</label></b-col>
                        </b-row>

                        <b-row class="my-1">
                            <b-col sm="3"><label style="font-weight: bold ">Harga</label></b-col>
                            <b-col sm="9"><label>{{item.price}}</label></b-col>
                        </b-row>

                        <b-row class="my-1">
                            <b-col sm="3"><label style="font-weight: bold ">Penjual</label></b-col>
                            <b-col sm="9"><label>{{item.seller}}</label></b-col>
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
    name: "product-detail",
    data() {
      return {
        item: 
          {
              id: 12344,
              name: "Ikan Lele 2 Kg",
              desc: "Ikan Lele Jumbo , baru saja diambil dari penangkaran kolam",
              category: "Peternakan Ikan",
              price: "Rp 250.000",
              seller: "Budi Prasetio"
            
          }
      }
    },
    methods: {
      editAction: function(phone){
          this.$router.push({name: "product_edit"})
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
