#!/bin/bash

if [ -z "${S3_BUCKET_NAME}" ] || [ -z "${DISTRIBUTION_ID}" ]; then
  exit 0
fi

echo "[$(date)] Build, first"
PUBLIC_URL="/${S3_BUCKET_PATH}" yarn build
if [ $? -ne 0 ]; then
  echo "[x] Failed to build."
  exit 1
fi

echo "[$(date)] Upload files into S3: ${S3_BUCKET_NAME}"
aws s3 rm --recursive "s3://${S3_BUCKET_NAME}/${S3_BUCKET_PATH}/" && \
  aws s3 cp --recursive "dist" "s3://${S3_BUCKET_NAME}/${S3_BUCKET_PATH}/"
if [ $? -ne 0 ]; then
  echo "[x] Failed to upload."
  exit 1
fi

echo "[$(date)] Invalidate CloudFront cache: ${DISTRIBUTION_ID}"
aws cloudfront create-invalidation \
  --distribution-id "${DISTRIBUTION_ID}" \
  --paths "/${S3_BUCKET_PATH}" "/${S3_BUCKET_PATH}/" "/${S3_BUCKET_PATH}/index.html"
if [ $? -ne 0 ]; then
  echo "[x] Failed to invalidate."
  exit 1
fi
