<script lang="ts">
    import Modal from '$src/lib/components/vendor/Modal.svelte'
    import { Button, P } from 'flowbite-svelte'
    let defaultModal = false
    const showModal = (): void => {
        defaultModal = true
    }
    const handleSuccess = (): void => alert('Handle "success"')
</script>

<Button on:click={showModal}>Prompt for agreement</Button>
<Modal title="Terms of Service" bind:open={defaultModal} autoclose>
    <P>
        For all the preposterous hat and the vacuous face, there was something noble in the simple
        faith of our visitor which compelled our respect. She laid her little bundle of papers upon
        the table and went her way, with a promise to come again whenever she might be summoned.
    </P>
    <P>
        Sherlock Holmes sat silent for a few minutes with his fingertips still pressed together, his
        legs stretched out in front of him, and his gaze directed upward to the ceiling. Then he
        took down from the rack the old and oily clay pipe, which was to him as a counsellor, and,
        having lit it, he leaned back in his chair, with the thick blue cloud-wreaths spinning up
        from him, and a look of infinite languor in his face.
    </P>
    <svelte:fragment slot="footer">
        <Button on:click={handleSuccess}>I accept</Button>
        <Button color="alternative">Decline</Button>
    </svelte:fragment>
</Modal>
