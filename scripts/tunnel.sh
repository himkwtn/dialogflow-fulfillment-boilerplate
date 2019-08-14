if [ -e .env ]; then
    source .env
    echo "forwading port:$PORT"
    LOCATION="localhost"
    EXPOSE="$PORT:$LOCATION:$PORT"
    TUNNEL="$USER@$VM"
    ssh -nN -R $EXPOSE $TUNNEL

else
    echo "Please set up .env file"
fi