export interface BlogModel{
  id:number,
  title:string,
  description:string
}

export interface Blogs2{
  blogList:BlogModel[]
  errorMessage: string
  //isLoaded: boolean
}
