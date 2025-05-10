#!/bin/sh
set +x

envFilename='.env'
nextFolder='./.next/'

apply_path() {
  while read line; do
    [ "${line#\#}" = "$line" ] || continue
    [ -z "$line" ] && continue

    configName=$(echo "$line" | cut -d'=' -f1)
    configValue=$(echo "$line" | cut -d'=' -f2-)
    configValue=$(echo "$configValue" | tr -d '\r\n')

    envValue=$(printenv "$configName")

    if [ -n "$configValue" ] && [ -n "$envValue" ]; then
      echo "Set : ${configName} = ${envValue}"
      find "$nextFolder" \( -type d -name .git -prune \) -o -type f -print | \
        xargs sed -i "s#${configValue}#${envValue}#g"
    fi
  done < "$envFilename"
}

apply_path
echo "Starting Next.js"
exec node_modules/.bin/next start --port "$APP_PORT"
