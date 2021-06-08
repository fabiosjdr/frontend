



const Desafio = {
    
    data(){
        return{
            eixoX: [],
            eixoY: [],
            cores: [],
            dados: [],
            canvas : '',
            chart : ''
        }
    },

    mounted: function() {
        
        this.canva = this.$refs.myChart;
        this.loadData();
    },

    methods:{
      
        initGrafico() {
           
            var eixoX = this.eixoX;
            var eixoY = this.eixoY;
            var cores = this.cores;

            var data = {
                labels: eixoX,
                datasets: [{
                    label: '# diferença capacidade / atendimentos',
                    data: eixoY,
                    backgroundColor: cores                 
                }]
            };
            
            const config = {
                type: 'bar',
                data,
                options: {
                    
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            };

            //console.log(config);

            var ctx = this.canva.getContext('2d');
            this.chart = new Chart(ctx, config);
        },

        loadData(){

            const hoje = new Date();
       
            for (let index = 1; index < 13; index++) {
                
                var novaData = new Date(hoje.setMonth(hoje.getMonth()+1)).toISOString().slice(0, 10).split('-');            
                
                var data = novaData[2]+'/'+novaData[1]+'/'+novaData[0];
                
                //alimenta as tabela
                info = [];
                info['Data'] = data;
                info['Demanda'] = Math.floor(Math.random() * 100);
                info['Capacidade'] = 100 + Math.floor(Math.random() * 100);
                info['AtPlanejado'] = Math.floor(Math.random() * 100);
                info['AtRealizado'] = Math.floor(Math.random() * 100);
                info['Desvio'] = Math.floor(Math.random() * 100);

                //alimento o grafico
                eixoY = (info['Capacidade'] - info['AtPlanejado'] );
                cores = (eixoY > 0) ? 'rgba(2, 222, 153, 0.5)' : 'rgba(222, 2, 2, 0.5)' ;
                this.eixoX.push(data);
                this.eixoY.push( eixoY );
                this.cores.push(cores)

                this.dados.push(info);
                
            
            }

            this.initGrafico();
        }
    },

    created:  function () {

        //alert('inicio');
        //this.initGrafico();
        
    }

  
}

Vue.createApp(Desafio).mount("#app");


