#!/bin/bash

tar -czvf dist.tar.gz dist
scp dist.tar.gz ubuntu@oms.cdnbye.com:~/
ssh ubuntu@oms.cdnbye.com "tar -xzvf dist.tar.gz"
ssh ubuntu@oms.cdnbye.com "sudo rm -rf /var/www/html/oms"
ssh ubuntu@oms.cdnbye.com "sudo mv dist /var/www/html/oms"
