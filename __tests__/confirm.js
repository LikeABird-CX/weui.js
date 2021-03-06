function close(done){
    $('.weui-dialog__btn')[0].click();
    setTimeout(done, closeDur);
}

describe('confirm', function(){
    this.timeout(0);

    it('should render confirm', (done) => {
        const ctn = 'test render confirm';
        weui.confirm(ctn);

        let $confirm = $('.weui-dialog');
        assert($confirm.length === 1);

        assert($('.weui-dialog__bd').html() === ctn);

        close(done);
    });

    it('should render custom title', (done) => {
        const title = 'custom title';
        weui.confirm('test render custom title', {
            title: title
        });

        assert($('.weui-dialog__title').html() === title);

        close(done);
    });

    it('should render custom btn', (done) => {
        weui.confirm('test render custom btn', {
            title: 'custom btn',
            buttons: [{
                label: 'NO',
                type: 'default'
            },{
                label: 'YES',
                type: 'primary'
            }]
        });

        assert($('.weui-dialog__btn_default').html() === 'NO');
        assert($('.weui-dialog__btn_primary').html() === 'YES');
        close(done);
    });

    it('test YES btn click', (done) => {
        let calledYES = false, calledNO = false;
        weui.confirm('test YES btn click', () => {
            calledYES = true;
        }, () => {
            calledNO = true;
        });

        $('.weui-dialog__btn_primary').click();
        setTimeout(() => {
            assert($('.weui-dialog').length === 0);
            assert(calledYES);
            assert(!calledNO);
            done();
        }, closeDur);
    });

    it('test NO btn click', (done) => {
        let calledYES = false, calledNO = false;
        weui.confirm('test NO btn click', () => {
            calledYES = true;
        }, () => {
            calledNO = true;
        });

        $('.weui-dialog__btn_default').click();
        setTimeout(() => {
            assert($('.weui-dialog').length === 0);
            assert(!calledYES);
            assert(calledNO);
            done();
        }, closeDur);
    });

    it('test custom YES btn click', (done) => {
        let calledYES = false, calledNO = false;
        weui.confirm('test custom YES btn click', {
            title: 'custom btn',
            buttons: [{
                label: 'NO',
                type: 'default',
                onClick: () => {
                    calledNO = true;
                }
            },{
                label: 'YES',
                type: 'primary',
                onClick: () => {
                    calledYES = true;
                }
            }]
        });

        $('.weui-dialog__btn_primary').click();
        setTimeout(() => {
            assert($('.weui-dialog').length === 0);
            assert(calledYES);
            assert(!calledNO);
            done();
        }, closeDur);
    });

    it('test custom NO btn click', (done) => {
        let calledYES = false, calledNO = false;
        weui.confirm('test custom NO btn click', {
            title: 'custom btn',
            buttons: [{
                label: 'NO',
                type: 'default',
                onClick: () => {
                    calledNO = true;
                }
            },{
                label: 'YES',
                type: 'primary',
                onClick: () => {
                    calledYES = true;
                }
            }]
        });

        $('.weui-dialog__btn_default').click();
        setTimeout(() => {
            assert($('.weui-dialog').length === 0);
            assert(!calledYES);
            assert(calledNO);
            done();
        }, closeDur);
    });
});
