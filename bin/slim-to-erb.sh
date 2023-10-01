#! /bin/bash

for SLIM_FILE in $(find . | grep 'slim$'); do
  ERB_FILE=$(echo $SLIM_FILE | sed 's/slim$/erb/')
  echo "slimrb -e $SLIM_FILE > $ERB_FILE"
  slimrb -e $SLIM_FILE > $ERB_FILE
done
