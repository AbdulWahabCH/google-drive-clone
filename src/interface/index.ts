interface GithubAuth{
    clientId: string,
    clientSecret: string
}
interface Button {
    clickable?: (e:any) => void,
    inputs:string,
    clsnm?:string
}