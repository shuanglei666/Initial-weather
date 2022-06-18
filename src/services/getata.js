import { get } from "@/services/axios";

// 天气
export function sweater(params) {
    return get("/simpleWeather/query", params)
}

// 空气质量
export function cityair(params) {
    return get("/environment/air/cityair", params)
}

// 世界时区时间   
export function showInfos(params) {
    return get("/fapig/timezone/show", params)
}


// 词语    //   
export function wards(params) {
    return get("/tyfy/query", params)
}

// 节假日信息查询   //  
export function day(params) {
    return get("/fapig/calendar/day.php", params)
}

// 新闻头条   //  
export function headLines(params) {
    return get("/toutiao/index", params)
}

// 热门视频榜单     //  
export function billboard(params) {
    return get("/fapig/douyin/billboard", params)
}

// 查询出行防疫政策     //  
export function springTravel(params) {
    return get("/springTravel/query", params)
}

// 城市查询出行防疫政策     //  
export function citys(params) {
    return get("/springTravel/citys", params)
}


// 黄金     //  
export function gold(params) {
    return get("/finance/gold/shgold", params)
}



// 汇率实时    //  
export function rata(params) {
    return get("/onebox/exchange/currency", params)
}

// 汇率列表    //  
export function rataList(params) {
    return get("/onebox/exchange/list", params)
}

