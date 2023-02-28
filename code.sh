screen -S screen_ss1
ffmpeg -i rtmp://192.168.8.195:1935/live/stream -c:v copy -c:a copy -f flv rtmp://a.rtmp.youtube.com/live2/h9yf-caed-e5mt-fswh-d6yb

screen -S screen_ss2
ffmpeg -i rtmp://192.168.8.195:1935/live/stream -c:v copy -c:a copy -f flv rtmps://live-api-s.facebook.com:443/rtmp/FB-586349923510159-0-Abz2CYbnPIn5HKn4
