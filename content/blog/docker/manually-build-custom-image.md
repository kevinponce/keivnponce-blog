---
title: Manually build Custom Image
date: "2021-08-01T22:12:00.121Z"
tags: ["docker"]
header: { type: 'icon', bgColor: '#DE3F24', icon: 'ruby' }
description: Manually build Custom Image
---

# build and sh into a new container
```
docker run -it alpine sh
```

Now you can run anything you want on it.

# In a new terminal window run the follwoing:
```
docker ps
docker commit -c 'CMD ["redis-server"]' ${CONTAINER_ID}
docker run ${ID}
```