import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiCallsService } from '../api-calls.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private apiCall:ApiCallsService) { }
  posts:any = [];
  ngOnInit(): void {
    this.apiCall.get(environment.baseUrl+'/posts',).subscribe((res)=>{
      // console.log(res) = res;
      this.posts = res
    })
  }

  showFullDeatails(id:any){
    let url = environment.baseUrl+'/posts/'+id;
    this.apiCall.get(url,[id]).subscribe((res)=>{
      // console.log(res) = res;
      console.log('info details');
      console.log(res)
    })
  }
  savePost(){
    let data ={
      title:'sample-test',
      body:'akkadkgadgadgkdgakdkad'

    }
    this.apiCall.post(environment.baseUrl+'/posts',data).subscribe((res)=>{
    console.log(res)
    })
  }
}
