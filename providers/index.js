// Copyright (c) Microsoft Corporation and others. Licensed under the MIT license.
// SPDX-License-Identifier: MIT

module.exports = {
  logging: {
    winston: require('../providers/logging/winstonConfig')
  },
  definition: {
    azure: require('../providers/stores/azblobConfig').definition,
    file: require('../providers/stores/fileConfig').definition,
    mongo: require('../providers/stores/mongoConfig'),
    dispatch: require('../providers/stores/dispatchConfig')
  },
  attachment: {
    azure: require('../providers/stores/azblobConfig').attachment,
    file: require('../providers/stores/fileConfig').attachment
  },
  search: {
    azure: require('../providers/search/azureConfig'),
    memory: require('../providers/search/memory')
  },
  caching: {
    redis: require('../providers/caching/redisConfig'),
    memory: require('../providers/caching/memory')
  },
  auth: {
    github: require('../middleware/githubConfig')
  },
  curation: {
    queue: { azure: require('../providers/curation/azureQueueConfig') },
    service: { github: require('../providers/curation/githubConfig') },
    store: {
      memory: require('../providers/curation/memoryStore'),
      mongo: require('../providers/curation/mongoConfig')
    }
  },
  harvest: {
    service: { crawler: require('../providers/harvest/crawlerConfig') },
    store: {
      azure: require('../providers/stores/azblobConfig').harvest,
      file: require('../providers/stores/fileConfig').harvest
    }
  }
}
