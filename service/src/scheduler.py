from apscheduler.schedulers.blocking import BlockingScheduler


# https://apscheduler.readthedocs.io/
scheduler = BlockingScheduler()


def dispatch(action, **kwargs):
    scheduler.add_job(action, "interval", **kwargs)
    scheduler.start()


def shutdown():
    scheduler.shutdown(wait=False)
