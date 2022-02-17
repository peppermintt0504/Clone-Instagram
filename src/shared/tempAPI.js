// temp API


export const RESP = {
    DIARY: {
        ok : true,
        list: [
        {
            diary_uid : "NKLJSDFGLER",
            emotion : "soso",
            tag : ["오늘","언제","끝날까?"],
            image_url : "https://t1.daumcdn.net/cfile/tistory/206CA00E4CF0B11229",
            title : "야근하는 날",
            contents : "야근을 왜 해야하죠",
            comment_cnt : 0,
            insert_dt : "2022-02-11 16:51:32" ,
            is_open : true,
            user_info:{
                uid : "user000001",
                user_id: "hello_world@naver.com",
                nickname : "hello_world",
                user_profile : "https://t1.daumcdn.net/cfile/tistory/206CA00E4CF0B11229"
            },
        },
        {
            diary_uid : "LMUABWUIFAFW",
            emotion : "angry",
            tag : ["내일","언제","집가지?"],
            image_url : "https://t1.daumcdn.net/cfile/tistory/206CA00E4CF0B11229",
            title : "출근하는 날",
            contents : "출근을 왜 해야하죠",
            comment_cnt : 0,
            insert_dt : "2022-02-12 16:51:32" ,
            is_open : false,
            user_info:{
                uid : "user000321",
                user_id: "123123@naver.com",
                nickname : "onetwothree",
                user_profile : "https://t1.daumcdn.net/cfile/tistory/206CA00E4CF0B11229"        
            },
        }
    ],
    },

    USER: {
    ok: true,
    list: [
        {
            uid : "user000321",
            user_id: "123123@naver.com",
            nickname : "onetwothree",
            user_profile : "https://t1.daumcdn.net/cfile/tistory/206CA00E4CF0B11229"
        },
        {
            uid : "user000001",
            user_id: "hello_world@naver.com",
            nickname : "hello_world",
            user_profile : "https://t1.daumcdn.net/cfile/tistory/206CA00E4CF0B11229"
        },
    ],
    },

    COMMENT: {
    ok: true,
    list: [
        {
            user_info:{
                uid : "user000001",
                user_id: "hello_world@naver.com",
                nickname : "hello_world",
                user_profile : "https://t1.daumcdn.net/cfile/tistory/206CA00E4CF0B11229"
            },
            diaryId : "NKLJSDFGLER",
            comment : "나도 야근해..",
            insert_dt : "2022-02-11 16:55:02",
        },
        {
            user_info:{
                uid : "user000321",
                user_id: "123123@naver.com",
                nickname : "onetwothree",
                user_profile : "https://t1.daumcdn.net/cfile/tistory/206CA00E4CF0B11229"
            },
            diaryId : "NKLJSDFGLER",
            comment : "어쩌라고",
            insert_dt : "2022-02-11 16:57:25",
        },
    ],
    },
};