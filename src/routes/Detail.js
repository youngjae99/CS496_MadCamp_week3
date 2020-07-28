import React, {Component} from "react"
import './Detail.css';
import { Button, Icon, Loader, Dimmer} from 'semantic-ui-react'
import RecipeContainer from "../components/RecipeContainer";
import { Progress } from 'antd';
  
class Detail extends Component{
    constructor(props) {
        super(props);
        this.state = {
            loading:true,
          ingredients: [],
          recipe: [],
          times:[],
          stepnum: 0,
          stepArr:"",
          special:1
        }
        
        this.setState({title:this.props.location.pathname.split('/')[2]});
        console.log("titlebar", this.props.location.pathname.split('/')[2]);
        //Ingredients Fetch
        //console.log("fetch", 'http://192.249.19.243:0280/main/ingredients/${this.props.location.pathname.split('/')[2]}');
        fetch('http://192.249.19.243:0280/main/ingredients/'+this.props.location.pathname.split('/')[2])
        .then(res => res.json())
        .then(data => this.setState({ingredients:data}))
        .then(()=>this.setState({loading: false}));

       //Recipe Fetch
       fetch('http://192.249.19.243:0280/main/recipe_text/'+this.props.location.pathname.split('/')[2])
           .then(res => res.json())
           .then(data => this.setState({recipe:data}));

       //Times Fetch
       fetch('http://192.249.19.243:0280/main/recipe_timer/'+this.props.location.pathname.split('/')[2])
           .then(res => res.json())
           .then(data => this.setState({times:data}));

        this.setState({img: "http://192.249.19.243:0280/main/image/"+this.props.location.pathname.split('/')[2]})
    }
    
    componentDidMount(){
        
    }

      toPrevPage(){
          console.log("PrevPage Btn clicked");
          if(this.state.stepnum>0){
            this.setState({
                stepnum: this.state.stepnum-1
            })
            this.render();
          }
          else{
            alert('First Page!');
          }
          console.log("Step ",this.state.stepnum);

      }

      toNextPage(){
        console.log("NextPage Btn clicked");
        if(this.state.stepnum<this.state.recipe.length+1){
            this.setState({
                stepnum: this.state.stepnum+1
            })
            this.render();
          }
          else{
            alert('Last Page!');
          }
          console.log("Step ",this.state.stepnum);
    }

    state = { percent: 33 }

    render(){
        //console.log(location.state.title);
        
        var {cur_recipe} = "nothing";
        var {cur_count} = "0";
        var {special} = 1;
        if(this.state.recipe!=null){
            if(this.state.stepnum==0){ // ?? ?? ??
                //onst ingrs = this.state.ingredients.split(',');
                //cur_recipe = this.state.ingredients;
                special=0;
            }
            else if(this.state.stepnum==this.state.recipe.length+1){
                //this.setState({speical: 2});
                special=2;
                return (
                    <div>
                        <div>
                            <p id="recipeTitle">{this.props.location.pathname.split('/')[2].replace("_"," ")}</p>
                            <h1 id="stepNumber">Finish!</h1>
                        </div>
        
                        <div>
                        <Progress percent={100} />
                        </div>
        
                        <Dimmer active inline='centered' id="loadingAnim" active={this.state.loading}>
                            <Loader size='big'>Loading</Loader>
                        </Dimmer>
        
                        <RecipeContainer special={special} stepnum={this.state.stepnum} cur_recipe={cur_recipe} cur_count={cur_count} img={"http://192.249.19.243:0280/main/image/"+this.props.location.pathname.split('/')[2]} ingredients={this.state.ingredients}/>
        
                        <div class="pageCont">
                            <span id="prevBtn">
                                <Button  onClick={this.toPrevPage.bind(this)}><i class="fas fa-angle-left"></i></Button>
                            </span>
                            <span id="nextBtn">
                                <Button onClick={this.toNextPage.bind(this)}><i class="fas fa-angle-right"></i></Button>
                            </span>
                        </div>
                    </div>
                );



            }
            else{
                cur_recipe = this.state.recipe[this.state.stepnum-1];
                //this.setState({speical: 1});
                special=1;
            }
        }
        cur_count = this.state.times[this.state.stepnum-1];
        
        return (
            <div>
                <div>
                    <p id="recipeTitle">{this.props.location.pathname.split('/')[2].replace(/_/g," ")}</p>
                    <h1 id="stepNumber">Step {this.state.stepnum}</h1>
                </div>

                <div>
                    <Progress percent={(this.state.stepnum/this.state.recipe.length)*100} width="100%"/>
                </div>

                <Dimmer active inline='centered' id="loadingAnim" active={this.state.loading}>
                    <Loader size='big'>Loading</Loader>
                </Dimmer>

                <RecipeContainer special={special} stepnum={this.state.stepnum} cur_recipe={cur_recipe} cur_count={cur_count} img={"http://192.249.19.243:0280/main/image/"+this.props.location.pathname.split('/')[2]} ingredients={this.state.ingredients}/>

                <div class="pageCont">
                    <span id="prevBtn">
                        <Button  onClick={this.toPrevPage.bind(this)}><i class="fas fa-angle-left"></i></Button>
                    </span>
                    <span id="nextBtn">
                        <Button onClick={this.toNextPage.bind(this)}><i class="fas fa-angle-right"></i></Button>
                    </span>
                </div>
            </div>
        );
    }
    
}
export default Detail;