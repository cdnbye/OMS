#!/bin/bash

tar -czvf dist.tar.gz dist
echo "=== scp start ==="
scp dist.tar.gz ubuntu@oms.cdnbye.com:~/
echo "=== scp end ==="
ssh ubuntu@oms.cdnbye.com "tar -xzvf dist.tar.gz"
echo "=== tar -xzvf  end ==="
ssh ubuntu@oms.cdnbye.com "sudo rm -rf /var/www/html/oms"
echo "=== rm  end ==="
ssh ubuntu@oms.cdnbye.com "sudo mv dist /var/www/html/oms"
echo "=== mv  end ==="
