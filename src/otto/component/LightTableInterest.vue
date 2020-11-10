<template>
    <b-card no-body>
        <b-card-header class="border-0">
            <h3 class="mb-0">{{tableTitle}}</h3>
        </b-card-header>

        <el-table class="table-responsive table"
                  header-row-class-name="thead-light"
                  :data="interest">
            

            <el-table-column label="Interests ID"
                             prop="int_id"
                             min-width="200px">
            </el-table-column>

            <el-table-column label="Name"
                             prop="name"
                             min-width="140px">
            </el-table-column>

            <el-table-column label="Deskripsi"
                             prop="description"
                             min-width="140px">
            </el-table-column>


            <el-table-column label="Action"
                             prop="int_id"
                             min-width="250px">

                <template v-slot="row">
                    <base-button href="javascript:;" type="default" @click="interestDetail(row.int_id)"> Detail</base-button>
                    <base-button href="javascript:;" type="danger" @click="interestRemove(row.int_id)"> Delete</base-button>
                </template>
            </el-table-column>
        
        </el-table>

        <b-card-footer class="py-4 d-flex justify-content-end">
            <base-pagination v-model="currentPage" :per-page="10" :total="50"></base-pagination>
        </b-card-footer>
    </b-card>
</template>
<script>
  import { Table, TableColumn} from 'element-ui'
  import { mapState } from "vuex"

  export default {
    name: 'light-table-interest',
    computed: {
        ...mapState('interest', ['interest'])
    },
    components: {
      [Table.name]: Table,
      [TableColumn.name]: TableColumn
    },
    props: {
        tableTitle: String
    },
    data() {
      return {
        currentPage: 1
      };
    },
    methods: {
      interestDetail: function(){
          this.$router.push({name: "interest_detail"})
      },
      interestRemove: function(){
          
      }
    },
    created() {
        this.$store.dispatch("interest/GET_INTEREST")
    }
  }
</script>
